const ENABLED = '1';

export const disablePreview = (url: string) => {
  const pattern = /preview=[^\\&]+&?/;
  return url.replace(pattern, '');
};

export const isPreviewEnabled = (query: Record<string, unknown>) => {
  const param = String(query?.preview).toLowerCase();
  return param === ENABLED;
};

export const withPreviewParam = (url: string, isPreview: boolean) => {
  const query = isPreview ? `?preview=${ENABLED}` : '';
  return url + query;
};
