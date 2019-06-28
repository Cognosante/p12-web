import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { Map, Polygon, ImageOverlay } from 'react-leaflet';
import axios from 'axios';
import { CRS } from 'leaflet';
import sortBy from 'lodash/sortBy';
import chunk from 'lodash/chunk';
import flatten from 'lodash/flatten';
import max from 'lodash/max';
import { BreadcrumbBar } from '../components/breadcrumbs';
import Card from '../components/card';
import { red, green, blue } from '../app/colors';
import image01 from '../images/MMStack_Pos0.ome.jpg';
import styles from './home.module.scss';

export default class Home extends React.Component {
  IMAGE_SIZE = 1024;

  COLORS = [blue, green, red];

  state = {
    data: [],
    cluster: 'mRNA'
  };

  async componentDidMount() {
    const imageId = 'exp1_pos0';
    try {
      const response = await axios.get(
        `https://bs9xfech47.execute-api.us-east-1.amazonaws.com/dev/image/${imageId}/roi`
      );
      this.colorData(response.data);
    } catch {
      console.log('Error roi data');
    }

    try {
      const dictionary = {};
      const response = await axios.get(`http://localhost:5000/images`);
      console.log('+++++++++', response);
      const { listing } = response.data;
      listing.forEach(item => {
        const filename = item.Key.slice(5, item.Key.length);
        const parts = filename.split('/');
        if (dictionary[parts[0]]) {
          dictionary[parts[0]].push(parts[1]);
        } else {
          dictionary[parts[0]] = [];
          dictionary[parts[0]].push(parts[1]);
        }
      });

      this.setState({ listing: dictionary });
      console.log('=========', dictionary);
    } catch (err) {
      console.log('Error s3 listing data', err);
    }
  }

  getLegendMap(cluster) {
    switch (cluster) {
      case 'area':
        return ['small', 'medium', 'large'];
      case 'ratio':
        return ['narrow', 'medium', 'wide'];
      default:
        return ['fewer', 'normal', 'many'];
    }
  }

  // Need to generate the data like this: [[51.515, -0.09], [51.52, -0.1], [51.52, -0.12]]
  // [lat, lng] or [y, x]
  getPolygon = d => d.x.map((x, i) => [Math.round(d.y[i] * 0.5), Math.round(x * 0.5)]);

  colorData(data, cluster) {
    let sorted = data;
    switch (cluster) {
      case 'area':
        sorted = this.sortByArea(data);
        break;
      case 'ratio':
        sorted = this.sortByAspectRatio(data);
        break;
      default:
        sorted = this.sortBymRNA(data);
    }
    const chunked = chunk(sorted, Math.ceil(sorted.length / 3));
    this.setState({ data: flatten(chunked.map((c, i) => c.map(d => ({ ...d, color: this.COLORS[i] })))) });
  }

  sortBymRNA(data) {
    return sortBy(data, d => d.roi_file_tmp.x.length);
  }

  sortByArea(data) {
    const getArea = (x, y, numPoints) => {
      let area = 0;
      const j = numPoints - 1;
      for (let i = 0; i < numPoints; i++) {
        area += (x[j] + x[i]) * (y[j] - y[i]);
      }
      return area / 2;
    };
    return sortBy(data, d => getArea(d.roi_file_tmp.x, d.roi_file_tmp.y, d.roi_file_tmp.x.length));
  }

  sortByAspectRatio(data) {
    return sortBy(data, d => max(d.roi_file_tmp.x) / max(d.roi_file_tmp.y));
  }

  handleClusterClick(e) {
    this.setState({ cluster: e.target.value });
    this.colorData(this.state.data, e.target.value);
  }

  render() {
    const { data } = this.state;
    const bounds = [[0, 0], [this.IMAGE_SIZE, this.IMAGE_SIZE]];
    const center = bounds[1].map(b => b / 2);
    return (
      <>
        <BreadcrumbBar />
        <Container className="mt-4">
          <Row>
            <Col>
              <h1 className="mb-3">Cell Viewer</h1>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <Map center={center} className={styles.image} crs={CRS.Simple} bounds={bounds} minZoom={0}>
                <ImageOverlay url={image01} bounds={bounds} />
                {!!data.length &&
                  data.map((d, i) => (
                    <Polygon
                      key={i}
                      color={d.color}
                      positions={this.getPolygon({ x: d.roi_file_tmp.x, y: d.roi_file_tmp.y })}
                    />
                  ))}
              </Map>
            </Col>
            <Col md={3}>
              <Card>
                <FormGroup tag="fieldset">
                  <legend className="px-3 py-1 bg-gray-lighter">Cell Clustering</legend>
                  <ul className="list-unstyled ml-3">
                    {this.getLegendMap(this.state.cluster).map((c, i) => (
                      <li className="d-inline-block mr-3">
                        <div
                          className={`d-inline-block align-middle mr-1 ${styles.legendBlock}`}
                          style={{ backgroundColor: this.COLORS[i] }}
                        />
                        <span className={styles.legendText}>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="py-1 px-3">
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input
                          type="radio"
                          name="cluster"
                          value="mRNA"
                          defaultChecked
                          onClick={e => this.handleClusterClick(e)}
                        />{' '}
                        mRNA Frequency
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input type="radio" name="cluster" value="area" onClick={e => this.handleClusterClick(e)} />{' '}
                        Area
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input type="radio" name="cluster" value="ratio" onClick={e => this.handleClusterClick(e)} />{' '}
                        Aspect Ratio
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input type="radio" name="cluster" /> Volume
                      </Label>
                    </FormGroup>
                  </div>
                </FormGroup>
                {/* <FormGroup>
                  <legend className="px-3 py-1 bg-gray-lighter">Image Stacks</legend>
                  <div className="py-1 px-3">
                    {this.state.listing &&
                      Object.keys(this.state.listing).map(folder => (
                        <div>
                          <div>{folder}</div>
                          {this.state.listing[folder].map(file => {
                            return (
                              <Label check>
                                <Input type="radio" name="cluster" value="area" /> {file}
                              </Label>
                            );
                          })}
                        </div>
                      ))}
                  </div>
                </FormGroup> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
