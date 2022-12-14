import {Filter} from '../model/Filter';
import {EQUAL} from '../AppConstant';

/**
 *
 * @param page page
 * @param size size
 * @param keyWord key
 * @param orderBy order
 * @param sortDirection sort
 */
export function buildPathParams(page, size, keyWord, orderBy?, sortDirection?) {
  keyWord = keyWord ? keyWord : '';
  size = size ? size : 10;
  if (page && isNaN(page)) {
    page = 0;
  }
  return '?page=' + (page - 1) +
    '&size=' + size +
    '&keyword=' + keyWord +
    '&orderBy=' + (orderBy || '') +
    '&sortDirection=' + (sortDirection || '');
}

export function buildPathParams2(page, size, orderBy?, sortDirection?) {
  size = size ? size : 10;
  if (page && isNaN(page)) {
    page = 0;
  }
  return '?page=' + (page - 1) +
    '&size=' + size +
    '&orderBy=' + (orderBy || '') +
    '&sortDirection=' + (sortDirection || '');
}

export function statusToDeleteFilter(status) {
  if (null == status || status === 'ALL') {
    return null;
  }
  if (status == 1) {
    return 0;
  }
  if (status == 0) {
    return 1;
  }
  return status;
}

export function buildPathParamsWithoutKeyword(page, size, orderBy?, sortDirection?) {
  size = size ? size : 10;
  if (page && isNaN(page)) {
    page = 0;
  }
  return '?page=' + (page - 1) +
    '&size=' + size +
    '&orderBy=' + (orderBy || '') +
    '&sortDirection=' + (sortDirection || '');
}

/**
 *
 * @param filterModel filterModel
 * @param booleanFields booleanFields
 * @param trueValue trueValue
 * @param falseValue falseValue
 */
export function buildFilterParam(filterModel, booleanFields?: any[], trueValue?: any, falseValue?: any) {
  if (!filterModel) {
    return null;
  }
  const keys = Object.keys(filterModel);
  if (!keys) {
    return null;
  }
  const filters = [];
  keys.forEach((field) => {
    const filterValue = filterModel[field].value;

    if (filterValue == null || filterValue.toString().trim().length === 0) {
      return;
    }
    const obj = {
      'field': field,
      'operation': filterModel[field].operation,
      'value': filterValue
    };
    if (booleanFields && booleanFields.findIndex((_field) => {
      return _field === field;
    }) >= 0) {
      if (trueValue && trueValue.toUpperCase() === filterValue.toUpperCase()) {
        obj.value = true;
      } else if (falseValue && falseValue.toUpperCase() === filterValue.toUpperCase()) {
        obj.value = false;
      } else {
        obj.value = null;
      }
    }
    filters.push(obj);

  });
  return filters;
}

/**
 *
 * @param filterModel filterModel
 * @param  joinFilterFields joinFilterFields
 * @returns rootFilter & joinFilter
 */
export function separateFiltersFromGrid(filterModel, joinFilterFields: string[]) {
  if (!filterModel) {
    return null;
  }
  const keys = Object.keys(filterModel);
  if (!keys) {
    return null;
  }
  const rootFilter = [];
  const joinFilter = [];
  keys.forEach((field) => {
    if (joinFilterFields.findIndex((joinField) => joinField === field) < 0) {
      rootFilter.push(buildFilterItem(field, filterModel[field]));
    } else {
      const items = field.split('.');
      const last = items[items.length - 1];
      joinFilter.push(buildFilterItem(last, filterModel[field]));
    }
  });
  return {root: rootFilter, join: joinFilter};
}

/*********************************************************************
 FUNCTION common make url with params
 input=[{name:'variable', data:''}]
 ***********************************************************************/
export function makeUrl(url: string, params: any[]): string {
  let rs = url;
  let isFirst = true;
  if (params != undefined) {
    params.forEach((element: { name: string; data: string; }) => {
      if (isFirst) {
        rs += '?' + element.name + '=' + element.data;
      } else {
        rs += '&' + element.name + '=' + element.data;
      }
      isFirst = false;
    });
  }
  return rs;
}


export function separateFiltersFromGridAssignment(filterModel, poFilterFields: string[], projectFilterFields: string[], candidateFilterFields: string[], invoiceFilterFields: string[]) {
  if (!filterModel) {
    return null;
  }
  const keys = Object.keys(filterModel);
  if (!keys) {
    return null;
  }
  const rootFilter = [];
  const poFilter = [];
  const projectFilter = [];
  const candidateFilter = [];
  const invoiceFilter = [];
  keys.forEach((field) => {
    if (poFilterFields.findIndex((joinField) => joinField === field) >= 0) {
      poFilter.push(buildFilterItem(field, filterModel[field]));
    } else if (projectFilterFields.findIndex((joinField) => joinField === field) >= 0) {
      projectFilter.push(buildFilterItem(field, filterModel[field]));
    } else if (candidateFilterFields.findIndex((joinField) => joinField === field) >= 0) {
      candidateFilter.push(buildFilterItem(field, filterModel[field]));
    } else if (invoiceFilterFields.findIndex((joinField) => joinField === field) >= 0) {
      invoiceFilter.push(buildFilterItem(field, filterModel[field]));
    } else {
      rootFilter.push(buildFilterItem(field, filterModel[field]));
    }
  });
  return {root: rootFilter, po: poFilter, project: projectFilter, candidate: candidateFilter, invoice: invoiceFilter};
}

/**
 *
 * @param field no
 * @param filter f
 */
export function buildFilterItem(field, filter) {
  if (!filter) {
    return null;
  }
  const targetFilter = {} as Filter;
  targetFilter.field = field;
  targetFilter.operation = EQUAL;

  switch (filter.filterType) {
    case 'text':
      targetFilter.value = filter.filter;
      break;
    case 'number':
      targetFilter.value = filter.filter;
      break;
    case 'date':
      targetFilter.value = filter.dateFrom;
      break;
    default:
      targetFilter.value = filter.filter;
  }
  return targetFilter;
}
