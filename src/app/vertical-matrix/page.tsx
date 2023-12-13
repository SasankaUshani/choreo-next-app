import { FilterComponent } from '@/app/vertical-matrix/components/filterComponent';
import { ReviewComponent } from '@/app/vertical-matrix/components/reviewComponent';
import { VerticalMatrixComponent } from '@/app/vertical-matrix/components/verticalMatrixComponent';
import { WebinarVideoComponent } from '@/app/vertical-matrix/components/webinarVideoComponent';
import { settingsApi } from '../api/settings/settings-api';
import { Suspense } from 'react';
import Title from '@/primitives/title';
import TodoServiceInstance from '@/apiService/todos/todoService';

export default async function verticalMatrix({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let initialSettings;
  let response;
  //todo need to check what can we use instead of useEffect()
  if (searchParams) {
    response = await TodoServiceInstance.getDetail({ postId: 1 });
    console.log('response!!!', response);

    initialSettings = await settingsApi.getInitialSettings(
      Number(searchParams.page)
    );
  }
  return (
    <Suspense>
      <div className="flex-container">
        <div className="left-component">
          <FilterComponent />
          <ReviewComponent />
          <WebinarVideoComponent />
        </div>
        <div className="right-component">
          <VerticalMatrixComponent content="Test Prop" />
          <br />
          <Title as="h3" text="Emails fetched from API call" />
          {initialSettings.data.map((data: { email: string }) => (
            <div>{data.email}</div>
          ))}
          <br />
          <Title as="h3" text="Fetched from GET" />
          <div>Title - {response?.title}</div>

          <div>Body - {response?.body}</div>
        </div>
      </div>
    </Suspense>
  );
}
