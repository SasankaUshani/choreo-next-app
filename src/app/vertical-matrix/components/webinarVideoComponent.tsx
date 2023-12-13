import ImageThumbnail from '@/primitives/image-thumbnail';
import Title from '@/primitives/title';
const dummyVideos = [
  {
    src: 'https://media.biocompare.com/m/37/article/595184-134x100.jpg',
    title:
      'Watch Webinar: Full Automation of a Covaris-Integrated High Throughput Cell-Based Assay System',
  },
  {
    src: 'https://media.biocompare.com/m/37/article/589922-134x100.jpg',
    title: 'Engineering Transmembrane Proteins for Cancer Immunotherapy',
  },
];
export const WebinarVideoComponent: React.FC<{}> = ({ ...props }) => {
  return (
    <div>
      <Title as="h3" text="Reviews" />
      {dummyVideos.map((video) => (
        <>
          <ImageThumbnail src={video.src} alt="" />
          <Title as="h4" text={video.title} />
        </>
      ))}
    </div>
  );
};
