'use client';

import { useGetServiceDetailQuery } from '@/api/queries/technical-assistant.query';

export default function Labs({
  params,
}: {
  params: {
    serviceId: string;
  };
}) {
  const { serviceId } = params;
  const { data } = useGetServiceDetailQuery(serviceId);
  return <div />;
}
