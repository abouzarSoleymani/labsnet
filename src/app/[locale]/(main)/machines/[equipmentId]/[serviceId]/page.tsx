'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import {
  useGetEquipmentDetailQuery,
  useGetEquipmentFieldActivityQuery,
} from '@/api/queries/technical-assistant.query';

export default function MachineDetail({
  params,
}: {
  params: {
    equipmentId: string;
    serviceId: string;
  };
}) {
  const { equipmentId, serviceId } = params;
  const { data: equipmentDetail } = useGetEquipmentDetailQuery(
    equipmentId,
    serviceId
  );

  const { data: equipmentFieldActivity } = useGetEquipmentFieldActivityQuery(
    equipmentDetail?.activityField,
    {
      'fieldActivityId[]': equipmentDetail?.activityField.map(
        (item: any) => item.fieldActivityId
      ),
    }
  );

  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-10'>
      <div className='container flex size-full w-full flex-col justify-between md:flex-row'>
        <div className='flex w-full  flex-col p-10 shadow-2xl md:w-[70%]'>
          <div className='py-4 font-extrabold'>{equipmentDetail?.title}</div>
          <div className='flex items-center justify-center'>
            <Image
              src={equipmentDetail?.image}
              alt=''
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '65%', height: 'auto' }}
            />
          </div>
          <ul className='pt-8'>
            <li className='flex items-center justify-start  py-2'>
              <div className='size-[15px] bg-gray-400' />
              <span className='px-2 text-gray_1'>بیشترین قیمت :</span>
              <span>{equipmentDetail?.maxCost}</span>
            </li>
            <li className='flex items-center justify-start  py-2'>
              <div className='size-[15px] bg-gray-400' />
              <span className='px-2 text-gray_1'> کمترین قیمت :</span>
              <span>{equipmentDetail?.minCost}</span>
            </li>
            <li className='flex items-center justify-start  py-2'>
              <div className='size-[15px] bg-gray-400' />
              <span className='px-2 text-gray_1'>شرایط استفاده :</span>
              <span>{equipmentDetail?.termsOfUse}</span>
            </li>
            <li className='flex items-center justify-start  py-2'>
              <div className='size-[15px] bg-gray-400' />
              <span className='px-2 text-gray_1'>توضیحات :</span>
              <span>{equipmentDetail?.description}</span>
            </li>
            <li className='flex items-center justify-start  py-2'>
              <div className='size-[15px] bg-gray-400' />
              <span className='px-2 text-gray_1'>زمینه فعالیت :</span>
              {equipmentDetail?.activityField?.map((item: any) => (
                <span
                  key={item?.name}
                  className='mx-1 cursor-pointer rounded-3xl bg-primary-green-400  p-2 text-xs text-white'
                >
                  {item?.name}
                </span>
              ))}
            </li>
          </ul>
        </div>
        <div className='mt-10 flex w-full flex-col md:mt-0 md:w-[25%]'>
          <div className='font-bold'>کارگاه های مشابه</div>
          <div className='my-3 w-full border-b-2 border-gray-500' />
          <ul>
            {equipmentFieldActivity?.map((item: any) => (
              <Link
                key={item?.serviceId}
                href={`/machines/${equipmentId}/${item?.serviceId}/labs`}
              >
                <li className='my-2 flex cursor-pointer items-center justify-start'>
                  <Image
                    className='rounded-full'
                    src={item?.image}
                    alt=''
                    width={40}
                    height={40}
                    sizes='100vw'
                    style={{ width: '40px', height: '40px' }}
                  />
                  <span className='px-3 text-sm'>{item?.persianTitle}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
