// icons/IconComponents.tsx
import React from 'react';

// ใช้ require แทน import
const PlusIcon = () => {
  const Icon = require('./plus.svg').ReactComponent;
  return <Icon />;
};

const CloseIcon = () => {
  const Icon = require('./close.svg').ReactComponent;
  return <Icon />;
};

const BoxIcon = () => {
  const Icon = require('./box.svg').ReactComponent;
  return <Icon />;
};

const CheckCircleIcon = () => {
  const Icon = require('./check-circle.svg').ReactComponent;
  return <Icon />;
};

const AlertIcon = () => {
  const Icon = require('./alert.svg').ReactComponent;
  return <Icon />;
};

const InfoIcon = () => {
  const Icon = require('./info.svg').ReactComponent;
  return <Icon />;
};

const ErrorIcon = () => {
  const Icon = require('./info-hexa.svg').ReactComponent;
  return <Icon />;
};

const BoltIcon = () => {
  const Icon = require('./bolt.svg').ReactComponent;
  return <Icon />;
};

const ArrowUpIcon = () => {
  const Icon = require('./arrow-up.svg').ReactComponent;
  return <Icon />;
};

const ArrowDownIcon = () => {
  const Icon = require('./arrow-down.svg').ReactComponent;
  return <Icon />;
};

const FolderIcon = () => {
  const Icon = require('./folder.svg').ReactComponent;
  return <Icon />;
};

const VideoIcon = () => {
  const Icon = require('./videos.svg').ReactComponent;
  return <Icon />;
};

const AudioIcon = () => {
  const Icon = require('./audio.svg').ReactComponent;
  return <Icon />;
};

const GridIcon = () => {
  try {
    const Icon = require('./grid.svg').ReactComponent;
    return Icon ? <Icon /> : <div>⚪</div>;
  } catch (error) {
    console.warn('GridIcon not found:', error);
    return <div>⚪</div>;
  }
};

const FileIcon = () => {
  const Icon = require('./file.svg').ReactComponent;
  return <Icon />;
};

const DownloadIcon = () => {
  const Icon = require('./download.svg').ReactComponent;
  return <Icon />;
};

const ArrowRightIcon = () => {
  const Icon = require('./arrow-right.svg').ReactComponent;
  return <Icon />;
};

const GroupIcon = () => {
  const Icon = require('./group.svg').ReactComponent;
  return <Icon />;
};

const BoxIconLine = () => {
  const Icon = require('./box-line.svg').ReactComponent;
  return <Icon />;
};

const ShootingStarIcon = () => {
  const Icon = require('./shooting-star.svg').ReactComponent;
  return <Icon />;
};

const DollarLineIcon = () => {
  const Icon = require('./dollar-line.svg').ReactComponent;
  return <Icon />;
};

const TrashBinIcon = () => {
  const Icon = require('./trash.svg').ReactComponent;
  return <Icon />;
};

const AngleUpIcon = () => {
  const Icon = require('./angle-up.svg').ReactComponent;
  return <Icon />;
};

const AngleDownIcon = () => {
  const Icon = require('./angle-down.svg').ReactComponent;
  return <Icon />;
};

const PencilIcon = () => {
  const Icon = require('./pencil.svg').ReactComponent;
  return <Icon />;
};

const CheckLineIcon = () => {
  const Icon = require('./check-line.svg').ReactComponent;
  return <Icon />;
};

const CloseLineIcon = () => {
  const Icon = require('./close-line.svg').ReactComponent;
  return <Icon />;
};

const ChevronDownIcon = () => {
  try {
    const Icon = require('./chevron-down.svg').ReactComponent;
    return Icon ? <Icon /> : <div>⌄</div>;
  } catch (error) {
    console.warn('ChevronDownIcon not found:', error);
    return <div>⌄</div>;
  }
};

const ChevronUpIcon = () => {
  const Icon = require('./chevron-up.svg').ReactComponent;
  return <Icon />;
};

const PaperPlaneIcon = () => {
  const Icon = require('./paper-plane.svg').ReactComponent;
  return <Icon />;
};

const LockIcon = () => {
  const Icon = require('./lock.svg').ReactComponent;
  return <Icon />;
};

const EnvelopeIcon = () => {
  const Icon = require('./envelope.svg').ReactComponent;
  return <Icon />;
};

const UserIcon = () => {
  const Icon = require('./user-line.svg').ReactComponent;
  return <Icon />;
};

const CalenderIcon = () => {
  try {
    const Icon = require('./calender-line.svg').ReactComponent;
    return Icon ? <Icon /> : <div>📅</div>;
  } catch (error) {
    console.warn('CalenderIcon not found:', error);
    return <div>📅</div>;
  }
};

const EyeIcon = () => {
  const Icon = require('./eye.svg').ReactComponent;
  return <Icon />;
};

const EyeCloseIcon = () => {
  const Icon = require('./eye-close.svg').ReactComponent;
  return <Icon />;
};

const TimeIcon = () => {
  const Icon = require('./time.svg').ReactComponent;
  return <Icon />;
};

const CopyIcon = () => {
  const Icon = require('./copy.svg').ReactComponent;
  return <Icon />;
};

const ChevronLeftIcon = () => {
  const Icon = require('./chevron-left.svg').ReactComponent;
  return <Icon />;
};

const UserCircleIcon = () => {
  try {
    const Icon = require('./user-circle.svg').ReactComponent;
    return Icon ? <Icon /> : <div>👤</div>;
  } catch (error) {
    console.warn('UserCircleIcon not found:', error);
    return <div>👤</div>;
  }
};

const TaskIcon = () => {
  const Icon = require('./task-icon.svg').ReactComponent;
  return <Icon />;
};

const ListIcon = () => {
  try {
    const Icon = require('./list.svg').ReactComponent;
    return Icon ? <Icon /> : <div>📋</div>;
  } catch (error) {
    console.warn('ListIcon not found:', error);
    return <div>📋</div>;
  }
};

const TableIcon = () => {
  try {
    const Icon = require('./table.svg').ReactComponent;
    return Icon ? <Icon /> : <div>📊</div>;
  } catch (error) {
    console.warn('TableIcon not found:', error);
    return <div>📊</div>;
  }
};

const PageIcon = () => {
  try {
    const Icon = require('./page.svg').ReactComponent;
    return Icon ? <Icon /> : <div>📄</div>;
  } catch (error) {
    console.warn('PageIcon not found:', error);
    return <div>📄</div>;
  }
};

const PieChartIcon = () => {
  try {
    const Icon = require('./pie-chart.svg').ReactComponent;
    return Icon ? <Icon /> : <div>📈</div>;
  } catch (error) {
    console.warn('PieChartIcon not found:', error);
    return <div>📈</div>;
  }
};

const BoxCubeIcon = () => {
  try {
    const Icon = require('./box-cube.svg').ReactComponent;
    return Icon ? <Icon /> : <div>📦</div>;
  } catch (error) {
    console.warn('BoxCubeIcon not found:', error);
    return <div>📦</div>;
  }
};

const PlugInIcon = () => {
  try {
    const Icon = require('./plug-in.svg').ReactComponent;
    return Icon ? <Icon /> : <div>🔌</div>;
  } catch (error) {
    console.warn('PlugInIcon not found:', error);
    return <div>🔌</div>;
  }
};

const DocsIcon = () => {
  const Icon = require('./docs.svg').ReactComponent;
  return <Icon />;
};

const MailIcon = () => {
  const Icon = require('./mail-line.svg').ReactComponent;
  return <Icon />;
};

const HorizontaLDots = () => {
  try {
    const Icon = require('./horizontal-dots.svg').ReactComponent;
    return Icon ? <Icon /> : <div>⋯</div>;
  } catch (error) {
    console.warn('HorizontaLDots not found:', error);
    return <div>⋯</div>;
  }
};

const ChatIcon = () => {
  const Icon = require('./chat.svg').ReactComponent;
  return <Icon />;
};

const MoreDotIcon = () => {
  const Icon = require('./more-dot.svg').ReactComponent;
  return <Icon />;
};

const BellIcon = () => {
  const Icon = require('./bell.svg').ReactComponent;
  return <Icon />;
};

// export ทั้งหมด
export {
  PlusIcon,
  CloseIcon,
  BoxIcon,
  CheckCircleIcon,
  AlertIcon,
  InfoIcon,
  ErrorIcon,
  BoltIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  FolderIcon,
  VideoIcon,
  AudioIcon,
  GridIcon,
  FileIcon,
  DownloadIcon,
  ArrowRightIcon,
  GroupIcon,
  BoxIconLine,
  ShootingStarIcon,
  DollarLineIcon,
  TrashBinIcon,
  AngleUpIcon,
  AngleDownIcon,
  PencilIcon,
  CheckLineIcon,
  CloseLineIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PaperPlaneIcon,
  LockIcon,
  EnvelopeIcon,
  UserIcon,
  CalenderIcon,
  EyeIcon,
  EyeCloseIcon,
  TimeIcon,
  CopyIcon,
  ChevronLeftIcon,
  UserCircleIcon,
  TaskIcon,
  ListIcon,
  TableIcon,
  PageIcon,
  PieChartIcon,
  BoxCubeIcon,
  PlugInIcon,
  DocsIcon,
  MailIcon,
  HorizontaLDots,
  ChatIcon,
  MoreDotIcon,
  BellIcon,
};