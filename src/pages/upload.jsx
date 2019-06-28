import React, { useState } from 'react';
import axios, { put } from 'axios';
import { Button, Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';
import urljoin from 'url-join';
import { BreadcrumbBar, Crumb } from '../components/breadcrumbs';
import { withConfig } from '../components/config-provider';

const Upload = function Upload({ config }) {
  const [file, setFile] = useState(0);
  const onFormSubmit = async e => {
    e.preventDefault();
    const result = await axios.post(urljoin(config.api, `image/${file.name}/url`));
    const { url } = result.data;
    const formData = new FormData();
    formData.append('file', file);
    const cfg = {
      headers: {
        'Content-Type': file.type
      }
    };
    try {
      const r = await put(url, file, cfg);
      return r;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const onChange = e => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <BreadcrumbBar>
        <Crumb active to="/about">
          Upload
        </Crumb>
      </BreadcrumbBar>
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Upload</h1>
            <FormGroup>
              <Label for="exampleFile">Choose an ome-tif file to upload: </Label>
              <Input type="file" name="file" id="exampleFile" onChange={onChange} />
            </FormGroup>
            <Button onClick={onFormSubmit}>Upload</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withConfig(Upload);
