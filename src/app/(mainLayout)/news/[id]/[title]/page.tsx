export default function NewsDetail({
  params,
}: {
  params: {
    id: string;
    title: string;
  };
}) {
  const { title, id } = params;
  return (
    <div>
      {title}
      {id}
    </div>
  );
}
