'use client';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const onShowRequetDialog = () => {
    setOpen(true);
  };

  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const onSelectEquipment = (equipment: any) => {
    // eslint-disable-next-line no-underscore-dangle
    const found = selectedEquipments.find((f: any) => f._id === equipment._id);

    if (found) {
      setSelectedEquipments(
        // eslint-disable-next-line no-underscore-dangle
        selectedEquipments.filter((f: any) => f._id !== equipment._id)
      );
    } else {
      // @ts-ignore
      setSelectedEquipments((prev: any) => {
        return [...prev, equipment];
      });
    }
  };
  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center justify-between py-10'>
      <div className='flex w-full items-center justify-center'>
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
          className='rounded-full border-[2px] border-gray_1'
          width={80}
          height={80}
          sizes='100vw'
          style={{ width: '80px', height: '80px' }}
        />
        <div className='py-2 text-xl font-bold'>{data?.persianTitle}</div>
        <ul className='text-gray_1'>
          <li>
            {data?.userInfo?.organizationName} , {data?.userInfo?.area} ,
            {data?.userInfo?.street} , {data?.userInfo?.plaque} ,
            {data?.userInfo?.floor} , {data?.userInfo?.unit}
          </li>
          <ul className='ml-auto flex flex-wrap pt-2 '>
            {data?.userInfo?.telephone && (
              <li className=' ml-1  flex items-center py-1 text-xs'>
                <Image
                  src='/images/icons/phone.png'
                  alt=''
                  width={0}
                  height={0}
                  className='mx-1'
                  sizes='100vw'
                  style={{ width: '20px', height: '20px' }}
                />
                {data?.userInfo?.telephone}
              </li>
            )}
            {data?.userInfo?.mobile && (
              <li className=' mx-1 flex  items-center justify-start text-xs'>
                <Image
                  src='/images/icons/mobile.png'
                  alt=''
                  width={0}
                  height={0}
                  className='mx-1'
                  sizes='100vw'
                  style={{ width: '20px', height: '20px' }}
                />
                {data?.userInfo?.mobile}
              </li>
            )}
            {data?.userInfo?.email && (
              <li className='mx-1 flex items-center  justify-start text-xs'>
                <Image
                  src='/images/icons/email.png'
                  alt=''
                  width={0}
                  className='mx-1'
                  height={0}
                  sizes='100vw'
                  style={{ width: '20px', height: '20px' }}
                />
                {data?.userInfo?.email}
              </li>
            )}
            {data?.userInfo?.website && (
              <li className='mx-1 flex items-center justify-start text-xs'>
                <Image
                  src='/images/icons/website.png'
                  alt=''
                  width={0}
                  height={0}
                  className='mx-1'
                  sizes='100vw'
                  style={{ width: '20px', height: '20px' }}
                />
                {data?.userInfo?.website}
              </li>
            )}
          </ul>
        </ul>
      </div>
      <div className='my-2 flex w-full items-start justify-start  border-b-[1px] border-solid ' />
      <div className='flex flex-col  justify-between py-2 md:flex-row'>
        <div className='flex  w-full flex-col md:w-[70%]'>
          <div>
            <div className='pb-5 text-xl font-bold'>توضیحات</div>
            <div className='text-sm font-thin'>{data?.description}</div>
          </div>
          <div>
            <div className='mt-10 pb-5 text-xl font-bold'>تگ های کارگاه</div>
            <div className='flex w-full flex-wrap'>
              {data?.technologyfield?.map((techField: any) => (
                <div
                  key={techField}
                  className=' mx-1  rounded-3xl  bg-gray-100 p-2  text-xs  font-thin text-primary-green-800'
                >
                  {techField}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-10 flex w-full flex-col md:mt-0 md:w-[20%]'>
          <div className='pb-5 text-xl font-bold'>کارگاه های مشابه</div>
          {Array.from(Array(5).keys()).map(item => (
            <div className='my-2 flex flex-row' key={item}>
              <Image
                width={40}
                height={40}
                sizes='100vw'
                style={{ width: '40px', height: '40px' }}
                src='/images/workshops/microbiology.jpg'
                alt=''
              />
              <div className='flex flex-col items-center justify-center pr-2'>
                <div className='text-xs text-primary-green-800'>Lab 01</div>
                <div className='text-xs text-gray_1'>lab 01</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='my-2 flex w-[100%] items-start justify-start  border-b-[1px] border-solid ' />
      <div className='flex w-full flex-col items-start justify-between'>
        <div className='mt-5 pb-5 text-xl font-bold'>
          کارمندان و کارشناسان کارگاه
        </div>
        <div className='flex w-full flex-wrap justify-evenly'>
          {data?.userInfo?.partners?.map((partner: any) => (
            <div className='flex flex-col text-xs' key={partner?.nationalCode}>
              <div className='py-1 text-primary-green-800'>
                {partner?.fullName}
              </div>
              <div className='py-1 text-gray_1'>{partner?.workPosition}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='my-4 flex w-full items-start justify-start  border-b-[1px] border-solid ' />

      <div className='flex w-full flex-wrap'>
        {data?.equipments.map((equipment: any) => (
          <div
            role='presentation'
            className={`sm:[w-50%] m-2 flex w-full cursor-pointer flex-col items-start justify-center p-5 shadow-2xl md:w-[22%] ${selectedEquipments?.find((f: any) => f._id === equipment?._id) ? 'bg-primary-green-400 text-white' : 'bg-white text-gray_1'}`}
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
          onClick={onShowRequetDialog}
          className='!min-w-[120px] !text-white'
          variant='contained'
          type='submit'
        >
          ثبت درخواست
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const { email } = formJson;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
