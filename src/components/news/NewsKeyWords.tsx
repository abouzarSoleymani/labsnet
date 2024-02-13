export const NewsKeyWords = ({ keywords }: any) => {
  return (
    <div className='mx-10 my-5 text-sm'>
      <h6 className='inline-block'>کلمات کلیدی :</h6>
      {keywords?.map((word: any, index: number) => (
        <>
          {index !== 0 && index !== keywords.length && ' - '}
          <span key={word}>{word}</span>
        </>
      ))}
    </div>
  );
};
