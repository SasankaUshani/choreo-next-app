import BaseResponse from '../common/types/BaseResponse';

async function getInitialSettings(id: number) {
  console.log('id', id);

  const response = await fetch(`https://reqres.in/api/users?page=${id}`);
  //   const response = await fetch(`/api/posts/${id}`);
  const postData = await response.json();
  return postData;
}
async function getPageSettings(): Promise<BaseResponse> {
  const response = await fetch('/api/pagesettings');
  const pageSettings = await response.json();
  return pageSettings;
}

export const settingsApi = {
  getInitialSettings,
  getPageSettings,
};
