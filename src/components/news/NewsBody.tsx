export const NewsBody = ({ content }: any) => {
  return (
    <div className='p-10'>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
