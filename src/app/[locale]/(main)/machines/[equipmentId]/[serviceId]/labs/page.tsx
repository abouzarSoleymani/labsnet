'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';

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
  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const onSelectEquipment = equipment => {
    const found = selectedEquipments.find((f: any) => f._id === equipment._id);

    if (found) {
      setSelectedEquipments(
        selectedEquipments.filter((f: any) => f._id !== equipment._id)
      );
    } else {
      setSelectedEquipments((prev: any) => [...prev, equipment]);
    }
  };
  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center justify-between py-10'>
      <div className='flex w-full'>
        <Image
          src={data?.imageUrl}
          alt=''
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '90%', height: 'auto' }}
        />
      </div>
      <div className='flex w-full flex-col items-start justify-start py-5'>
        <Image
          // src={data?.userInfo?.logoUrl}
          src={data?.imageUrl}
          alt=''
          className='rounded-full border border-[2px] border-gray_1'
          width={80}
          height={80}
          sizes='100vw'
          style={{ width: '80px', height: '80px' }}
        />
        <div className='py-2 text-xl font-bold'>{data?.persianTitle}</div>
        <div className='py-2 text-sm font-thin'>{data?.description}</div>
        <ul>
          <li>
            {data?.userInfo?.organizationName} - {data?.userInfo?.area} -
            {data?.userInfo?.street} - {data?.userInfo?.plaque} -
            {data?.userInfo?.floor} - {data?.userInfo?.unit}
          </li>
          <li>{data?.userInfo?.telephone}</li>
          <li>{data?.userInfo?.mobile}</li>
          <li>{data?.userInfo?.email}</li>
          <li>{data?.userInfo?.website}</li>
        </ul>
      </div>
      <div className='my-6 flex w-[80%] items-start justify-start  border-b-2 border-solid ' />

      <div className='flex w-full flex-wrap'>
        {data?.equipments.map((equipment: any) => (
          <div
            className={`m-2 flex w-[22%] cursor-pointer flex-col items-start justify-center p-5 shadow-2xl ${selectedEquipments?.find((f: any) => f._id === equipment?._id) ? 'bg-primary-green-400 text-white' : 'bg-white text-gray_1'}`}
            onClick={() => onSelectEquipment(equipment)}
            key={equipment?._id}
          >
            <Image
              src={equipment?.imageUrl}
              alt=''
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
            />
            <div className='pt-4 text-sm font-bold'>{equipment?.title}</div>

            <ul className='pt-2'>
              <li className='flex items-center justify-start  py-2 text-xs'>
                <span className='px-2  text-gray_1'>بیشترین قیمت :</span>
                <span>{equipment?.maxCost}</span>
              </li>
              <li className='flex items-center justify-start  py-2 text-xs'>
                <span className='px-2 text-gray_1'> کمترین قیمت :</span>
                <span>{equipment?.minCost}</span>
              </li>
              <li className='flex items-center justify-start  py-2 text-xs'>
                <span className='px-2 text-gray_1'>شرایط استفاده :</span>
                <span>{equipment?.termsOfUse}</span>
              </li>
              <li className='flex items-center justify-start  py-2 text-xs'>
                <span className='px-2 text-gray_1'>توضیحات :</span>
                <span>{equipment?.description}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className='flex w-full justify-end'>
        <Button
          className='!min-w-[120px] !text-white'
          variant='contained'
          type='submit'
        >
          ثبت درخواست
        </Button>
      </div>
    </main>
  );
}
