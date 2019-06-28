/**
 * This is the one file where we import and wrap FontAwesome icons,
 * so we don't have to import the verbose and too-specific
 * <FontAwesomeIcon /> everywhere or call library.add(...icons) on app
 * start.
 *
 * To add icons to the app, search for an icon at fontawesome.com,
 * then add it to this file.
 *
 * Then, to use an icon in another file, import it from this file and
 * use it like a regular component:
 * import { Circle } from '../components/icons';
 *
 */

// Ignoring some import rules so the imports can be
// co-located next to the icons that use them.
/* eslint-disable import/first */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-restricted-paths */
import React from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

// Icons, alphabetized

import { faArrowCircleRight } from '@fortawesome/pro-regular-svg-icons';
export const ArrowCircleRight = props => <FAIcon icon={faArrowCircleRight} {...props} />;

import { faArrowFromLeft as faFromL } from '@fortawesome/pro-regular-svg-icons';
export const ArrowFromLeft = props => <FAIcon icon={faFromL} {...props} />;

import { faArrowToLeft } from '@fortawesome/pro-regular-svg-icons';
export const ArrowToLeft = props => <FAIcon icon={faArrowToLeft} {...props} />;

import { faBan } from '@fortawesome/pro-regular-svg-icons';
export const Ban = props => <FAIcon icon={faBan} {...props} />;

import { faCalendarWeek } from '@fortawesome/pro-regular-svg-icons';
export const CalendarWeek = props => <FAIcon icon={faCalendarWeek} {...props} />;

import { faCheckCircle } from '@fortawesome/pro-regular-svg-icons';
export const CheckCircle = props => <FAIcon icon={faCheckCircle} {...props} />;

import { faChevronUp } from '@fortawesome/pro-regular-svg-icons';
export const ChevronUp = props => <FAIcon icon={faChevronUp} {...props} />;

import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';
export const ChevronDown = props => <FAIcon icon={faChevronDown} {...props} />;

import { faCircle } from '@fortawesome/pro-solid-svg-icons';
export const Circle = props => <FAIcon icon={faCircle} {...props} />;

import { faClipboardUser as faCU } from '@fortawesome/pro-regular-svg-icons';
export const ClipboardUser = props => <FAIcon icon={faCU} {...props} />;

import { faClock } from '@fortawesome/pro-regular-svg-icons';
export const Clock = props => <FAIcon icon={faClock} {...props} />;

import { faExclamationTriangle as faWarn } from '@fortawesome/pro-regular-svg-icons';
export const ExclamationTriangle = props => <FAIcon icon={faWarn} {...props} />;

import { faFile } from '@fortawesome/pro-regular-svg-icons';
export const File = props => <FAIcon icon={faFile} {...props} />;

import { faFileDownload } from '@fortawesome/pro-regular-svg-icons';
export const FileDownload = props => <FAIcon icon={faFileDownload} {...props} />;

import { faFrownOpen } from '@fortawesome/pro-regular-svg-icons';
export const FrownOpen = props => <FAIcon icon={faFrownOpen} {...props} />;

import { faHistory } from '@fortawesome/pro-regular-svg-icons';
export const History = props => <FAIcon icon={faHistory} {...props} />;

import { faHome } from '@fortawesome/free-solid-svg-icons';
export const Home = props => <FAIcon icon={faHome} {...props} />;

import { faLockAlt } from '@fortawesome/pro-regular-svg-icons';
export const LockAlt = props => <FAIcon icon={faLockAlt} {...props} />;

import { faNotesMedical as faMedNotes } from '@fortawesome/pro-regular-svg-icons';
export const NotesMedical = props => <FAIcon icon={faMedNotes} {...props} />;

import { faPoll } from '@fortawesome/pro-regular-svg-icons';
export const Poll = props => <FAIcon icon={faPoll} {...props} />;

import { faPrint } from '@fortawesome/pro-regular-svg-icons';
export const Print = props => <FAIcon icon={faPrint} {...props} />;

import { faQuestionCircle } from '@fortawesome/pro-regular-svg-icons';
export const QuestionCircle = props => <FAIcon icon={faQuestionCircle} {...props} />;

import { faRedo } from '@fortawesome/pro-regular-svg-icons';
export const Redo = props => <FAIcon icon={faRedo} {...props} />;

import { faStopCircle } from '@fortawesome/pro-regular-svg-icons';
export const StopCircle = props => <FAIcon icon={faStopCircle} {...props} />;

import { faTimesCircle } from '@fortawesome/pro-regular-svg-icons';
export const TimesCircle = props => <FAIcon icon={faTimesCircle} {...props} />;

import { faUserCircle } from '@fortawesome/pro-solid-svg-icons';
export const UserCircle = props => <FAIcon icon={faUserCircle} {...props} />;
