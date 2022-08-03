export const EQUAL = ':';
export const FLOAT_REGEX = /^[0-9]+([.][0-9]+)*$/;
export const EMAIL_REGEX = /[^@]+@[^\.]+\..+/;
export const EMAILS_REGEX = /^(\s?[^\s;]+@[^\s;]+\.[^\s;]+\s?;)*(\s?[^\s;]+@[^\s;]+\.[^\s;]+)$/;
export const INTEGER_REGEX = /^[0-9]\d*$/;
export const ITEM_PER_PAGE = [10, 20, 30, 40, 50];
export const DEFAULT_LANGUAGE = 'en';
export const ROLE_PREFIX_LENGTH = 5; // ROLE_
export const ROLE_USER = 'ROLE_USER';
export const PAGE_REGEX = /page=[0-9]*/;
export const SYSTEM_STATUS = 1;
export const REQUEST_ATTACHMENTS_FOLDER = 'REQUEST';
export const GREATE_THAN = '>';
export const LESS_THAN = '<';
export const O = 'O';
export const X = 'X';

export const STATUS = {
  ALL: 'ALL',
  ACTIVE: 1,
  DISABLE: 0,
  DELETED: -1
};
export const AVATARSTATUS = {
  AVAIABLE: 1,
  LOCK: 0,
  DELETED: -1,
  USUALLY: 100005,
  RESTRICT: 200003,
  OVER_USED: 200002
};
export const BACKUPSTATUS = {
  ALL: -2,
  DELETE: -1,
  DISABLE: 0,
  ENABLE: 1,
  PROCESS: 2,
  FINISH: 3
};
export const BACKUPTYPE = {
  ALL: 0,
  PROJECT: 1,
  USER: 2,
  SYSTEM: 3
};
export const DELETE_STATUS = {
  DELETED: 1,
  NOT_DELETED: 0
};

export const SENTIMENT = {
  POSITIVE: 1,
  NEGATIVE: -1,
  NEUTER: 0
};

export const AVATAR_TYPE = {
  IM_AVATAR: 2,
  AN_AVATAR: 1,
};
export const AVATAR_GROUP_TYPE = {
  TARGET_AVATAR: 3,
  TARGET_IM_AVATAR: 4,
  IM_AVATAR: 2,
  AN_AVATAR: 1,
};

export const COOKIE_STATE = {
  ALL: 'ALL',
  ALIVE: 1,
  EXPIRE: 0,
};
export const AGES = ['13-17', '18-25', '26-34', '35-44', '45-54', '55+'];
export const GENDERS2 = {
  ALL: 'ALL',
  MALE: 'm',
  FEMALE: 'f'
};
export const GENDERS = {
  ALL: 'ALL',
  MALE: 'male',
  FEMALE: 'female'
};
export const DATE_RANGES = {
  DAY: '1',
  WEEK: '7',
  TWO_WEEK: '14',
  MONTH: '30',
};

export const CHART_LANG = {
  downloadCSV: 'Tải CSV',
  downloadJPEG: 'Tải CSV',
  downloadPDF: 'Tải PDF',
  downloadPNG: 'Tải PNG',
  downloadSVG: 'Tải SVG',
  downloadXLS: 'Tải XLS',
  loading: 'Đang tải ...',
  noData: 'Không có dữ liệu',
  printChart: 'In biểu đồ',
  viewFullscreen: 'Xem toàn màn hình',
} as any;
export const COMMON_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const UI_DATETIME_FORMAT = 'DD/MM/YYYY HH:mm:ss';
export const API_DATE_FORMAT = 'YYYYMMDD HHmmss';
export const UI_DATE_FORMAT = 'DD/MM/YYYY';
export const UI_DATE_FORMAT_HTML = 'dd/MM/yyyy';

export const MONITOR_REQUEST = {
  ALL: 'ALL',
  ALERTING: 2,
  NORMAL: 1,
  PAUSE: 0,
  DELETED: -1
};
export const MONITOR_EMAIL_NOTIFY_STATUS = {
  DELETED: -1,
  DISABLE: 0,
  ENABLE: 1,
  SUCCESS: 10,
  SENDING: 11,
  ERROR: 12
};
export const ALERT_FREQUENCY = [5, 15, 30, 60, 180, 360, 720, 1440];
export const ALERT_MONITOR_REQUEST_PERIOD = {
  DAY: 1,
  WEEK: 7,
  MONTH: 30,
  YEAR: 365
};

export const TOPIC_SELECT_TYPE = {
  MULTIPLE: true,
  ONE: false,
};
export const USER_SELECT_TYPE = {
  MULTIPLE: true,
  ONE: false,
};
export const IMPACT_CONTENT_TYPE = {
  POST: 1,
  COMMENT: 2,
  REPLY: 3,
};
export const IMPACT_STEP_ACTION = {
  COMMENT: 1,
  REPLY: 2,
  LIKE: 3,
};
export const IMPACT_CONTENT_TYPE_HEADER = {
  POST: 'Bổ sung bài viết',
  COMMENT: 'Bổ sung bình luận',
  REPLY: 'Bổ sung trả lời',
};
export const USER_LOG_ACTION = {
  ALL: '',
  LOGIN: 1,
  LOGOUT: 2,
  CREATE: 3,
  UPDATE: 4,
  DELETE: 5,
  SEARCH: 6,
  VIEW: 7,
  OPEN_FUNCTION: 8,
  DOWNLOAD: 9,
  PRINT: 10
};
export const LOG = {
  uri: null,
  detail: null,
  action: null
};

export const SEARCH_SCOPE = {
  PERSONAL: 'PERSONAL',
  GROUP: 'GROUP',
  GLOBAL: 'GLOBAL'
};
export const TRACE_SCOPE = {
  SHARING_CHAIN: 'SHARING_CHAIN',
  RELATION: 'RELATION',
  BEHIND_THE_TOPIC: 'BEHIND_THE_TOPIC',
  PROFILE: 'PROFILE'
};
export const SEARCH_SCREENS = {
  MONITOR: 'MONITOR',
  STATISTIC: 'STATISTIC',
  HOT_KEYWORD: 'HOT_KEYWORD',
  SENTIMENT: 'SENTIMENT',
  ANALYTIC_SEARCH: 'ANALYTIC_SEARCH',
  ANALYTIC_GENERAL: 'ANALYTIC_GENERAL',
  COMPARISION: 'COMPARISION',
  ALERT: 'ALERT',
  TRACE: 'TRACE'
};
export const INTERVAL = {
  AUTO: 0,
  A: 15,
  B: 30,
  C: 60,
  D: 360,
  E: 1440
};
export const RUNSTATUS = {
  ALL: '',
  WAIT: 0,
  RUN: 1,
  COMPLETE: 2,
  PAUSE: 3
};
export const MAX_GRAPH_NODE_NAME = 20;
export const EXCLUDE_API_LOADER = [
  'monitoring',
  'userLog',
  'getSentimentChart',
  'getSentimentPosts',
  'getSearchPosts',
  'getGenderLocation',
  'getMentionChart',
  'getInteractionChart',
  'analyticsNotifyUser',
  'generals/realtime',
  'generals/all',
  '/alarmConfig',
  'managerModule/all',
  'de-workers/all',
  'vkontakte-workers/all',
  'facebook-workers/all',
  'linkedin-workers/all',
  'metasearch-workers/all',
  'openapi-workers/all',
  'rss-workers/all',
  'twitter-workers/all',
  'youtube-workers/all',
  'change-interaction',
  '/alarmConfig',
  '/notifyUser'
];
export const IMPACT_TYPE = {
  ACTION_TYPE_LOGIN: 0,
  ACTION_TYPE_CHECK_COOKIE: 1,
  ACTION_TYPE_POST: 2,
  ACTION_TYPE_COMMENT: 3,
  ACTION_TYPE_REPLY: 4,
  ACTION_TYPE_LIKE_POST: 5,
  ACTION_TYPE_LIKE_COMMENT: 6,
  ACTION_TYPE_SHARE: 7,
  ACTION_TYPE_GET_USER_INFO: 8
};
export const TRACKING_TYPE = {
  LIKE: 2,
  SHARE: 3,
  COMMENT: 5,
  FOLLOW: 8,
};

export const IMPACT_STATISTIC_TYPE = {
  GLOBAL: 'GLOBAL',
  DOCUMENT: 'DOCUMENT',
  TARGETS: 'TARGETS',
  TARGET_GROUP: 'TARGET_GROUP',
};
export const STRATEGY_PRIORITY = {
  IMPACT_TIME: 1,
  COMPLETE_ARTICLE: 2
};
export const TWEET_TYPE = {
  TWEET_DETAIL: 'TWEET_DETAIL',
  TWEET_LIKES: 'TWEET_LIKES',
  TWEET_COMMENTS: 'TWEET_COMMENTS',
  TWEET_REPOSTS: 'TWEET_REPOSTS'
};
export const USER_TYPE = {
  USER_DETAIL: 'USER_DETAIL',
  USER_FOLLOWS: 'USER_FOLLOWS',
  USER_FANS: 'USER_FANS',
  USER_TWEETS: 'USER_TWEETS'
};

export const SOCIAL_TYPES = [
  {label: 'Facebook', value: 'facebook'},
  {label: 'Youtube', value: 'youtube'},
  {label: 'Twitter', value: 'twitter'},
  {label: 'Website', value: 'website'},
  {label: 'Naver', value: 'naver'},
  {label: 'LinkedIn', value: 'linkedIn'},
  {label: 'Vkontakte', value: 'vkontakte'}
];

export const NATIONS = [
  {label: 'AFGHANISTAN', value: 1},
  {label: 'ÅLAND ISLANDS', value: 2},
  {label: 'ALBANIA', value: 3},
  {label: 'ALGERIA', value: 4},
  {label: 'AMERICAN SAMOA', value: 5},
  {label: 'ANDORRA', value: 6},
  {label: 'ANGOLA', value: 7},
  {label: 'ANGUILLA', value: 8},
  {label: 'ANTARCTICA', value: 9},
  {label: 'ANTIGUA AND BARBUDA', value: 10},
  {label: 'ARGENTINA', value: 11},
  {label: 'ARMENIA', value: 12},
  {label: 'ARUBA', value: 13},
  {label: 'AUSTRALIA', value: 14},
  {label: 'AUSTRIA', value: 15},
  {label: 'AZERBAIJAN', value: 16},
  {label: 'BAHAMAS', value: 17},
  {label: 'BAHRAIN', value: 18},
  {label: 'BANGLADESH', value: 19},
  {label: 'BARBADOS', value: 20},
  {label: 'BELARUS', value: 21},
  {label: 'BELGIUM', value: 22},
  {label: 'BELIZE', value: 23},
  {label: 'BENIN', value: 24},
  {label: 'BERMUDA', value: 25},
  {label: 'BHUTAN', value: 26},
  {label: 'BOLIVIA', value: 27},
  {label: 'BOSNIA AND HERZEGOVINA', value: 28},
  {label: 'BOTSWANA', value: 29},
  {label: 'BOUVET ISLAND', value: 30},
  {label: 'BRAZIL', value: 31},
  {label: 'BRITISH INDIAN OCEAN TERRITORY', value: 32},
  {label: 'BRUNEI DARUSSALAM', value: 33},
  {label: 'BULGARIA', value: 34},
  {label: 'BURKINA FASO', value: 35},
  {label: 'BURUNDI', value: 36},
  {label: 'CAMBODIA', value: 37},
  {label: 'CAMEROON', value: 38},
  {label: 'CANADA', value: 39},
  {label: 'CAPE VERDE', value: 40},
  {label: 'CAYMAN ISLANDS', value: 41},
  {label: 'CENTRAL AFRICAN REPUBLIC', value: 42},
  {label: 'CHAD', value: 43},
  {label: 'CHILE', value: 44},
  {label: 'CHINA', value: 45},
  {label: 'CHRISTMAS ISLAND', value: 46},
  {label: 'COCOS (KEELING) ISLANDS', value: 47},
  {label: 'COLOMBIA', value: 48},
  {label: 'COMOROS', value: 49},
  {label: 'CONGO', value: 50},
  {label: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', value: 51},
  {label: 'COOK ISLANDS', value: 52},
  {label: 'COSTA RICA', value: 53},
  {label: 'CÔTE DIVOIRE', value: 54},
  {label: 'CROATIA', value: 55},
  {label: 'CUBA', value: 56},
  {label: 'CYPRUS', value: 57},
  {label: 'CZECH REPUBLIC', value: 58},
  {label: 'DENMARK', value: 59},
  {label: 'DJIBOUTI', value: 60},
  {label: 'DOMINICA', value: 61},
  {label: 'DOMINICAN REPUBLIC', value: 62},
  {label: 'ECUADOR', value: 62},
  {label: 'EGYPT', value: 63},
  {label: 'EL SALVADOR', value: 64},
  {label: 'EQUATORIAL GUINEA', value: 65},
];

export const DEPTS = [
  {label: '0', value: 1},
  {label: '1', value: 2},
  {label: '2', value: 3},
];

export const SYSTEM_MONITORING_STATUS = {
  ALL: 'ALL',
  ACTIVE: 1,
  DISABLE: 0,
  DELETED: -1
};
