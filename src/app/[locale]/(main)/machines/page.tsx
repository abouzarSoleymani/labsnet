'use client';

import { Button, Pagination } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import type { ChangeEvent } from 'react';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { useFilterCombinedQuery } from '@/api/queries/filter.query';
import { useGetTechnicalAssistantQuery } from '@/api/queries/technical-assistant.query';
import { FilterTag } from '@/components/machine/filter-tag/FilterTag';

export default function Machine() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const { data: technicalAssistantData, refetch } =
    useGetTechnicalAssistantQuery(params, page);
  const [activity, technology, usageService] = useFilterCombinedQuery();
  const [activityItem, setActivityItem] = useState([]);
  const [technologyItem, setTechnologyItem] = useState([]);
  const [usageServiceItem, setUsageServiceItem] = useState([]);

  const onSelectActivityItem = (item: any) => {
    const found = activityItem.find(
      (f: any) => f.fieldActivityId === item.fieldActivityId
    );
    if (found) {
      setActivityItem(
        activityItem.filter(
          (f: any) => f.fieldActivityId !== item.fieldActivityId
        )
      );
    } else {
      // @ts-ignore
      setActivityItem((prev: any) => [...prev, item]);
    }
  };
  const onSelectTechnologyItem = (item: any) => {
    const found = technologyItem.find(
      (f: any) => f.technologyFieldId === item.technologyFieldId
    );
    if (found) {
      setTechnologyItem(
        technologyItem.filter(
          (f: any) => f.technologyFieldId !== item.technologyFieldId
        )
      );
    } else {
      // @ts-ignore
      setTechnologyItem((prev: any) => [...prev, item]);
    }
  };
  const onSelectUsageServiceItem = (item: any) => {
    const found = usageServiceItem.find((f: any) => f.usageId === item.usageId);
    if (found) {
      setUsageServiceItem(
        usageServiceItem.filter((f: any) => f.usageId !== item.usageId)
      );
    } else {
      // @ts-ignore
      setUsageServiceItem((prev: any) => [...prev, item]);
    }
  };
  const onSearch = () => {
    const paramFields = [];
    if (activityItem && activityItem.length) {
      paramFields.push({
        'activityField[]': activityItem.map(
          (item: any) => item.fieldActivityId
        ),
      });
    }
    if (technologyItem && technologyItem.length) {
      paramFields.push({
        'technologyFieldId[]': technologyItem.map(
          (item: any) => item.technologyFieldId
        ),
      });
    }
    if (usageServiceItem && usageServiceItem.length) {
      paramFields.push({
        'usageId[]': usageServiceItem.map((item: any) => item.usageId),
      });
    }
    const reducedObject = paramFields.reduce((result, current) => {
      return Object.assign(result, current);
    }, {});
    setParams(reducedObject);
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    refetch();
  }, [params]);

  useEffect(() => {
    if (technicalAssistantData && technicalAssistantData.count) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      setPageCount(Math.ceil(technicalAssistantData?.count / 10));
    }
  }, [technicalAssistantData]);

  const handleChangePagination = (
    event: ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-8'>
      <div className='flex size-full flex-col md:flex-row'>
        <div className='flex size-full w-full flex-col flex-wrap items-center  justify-center border-[1px] border-gray-100 md:w-[20%]  '>
          <div className='flex size-full flex-col items-center justify-start p-4'>
            <FilterTag
              title='زمینه فعالیت'
              items={activity?.data}
              selectedItems={activityItem}
              onSelectItem={(item: any) => onSelectActivityItem(item)}
              fieldValue='fieldActivityId'
              fieldName='name'
            />
          </div>
          <div className='flex size-full flex-col items-center justify-start   p-4 '>
            <FilterTag
              title='حوزه فناوری'
              items={technology?.data}
              selectedItems={technologyItem}
              onSelectItem={(item: any) => onSelectTechnologyItem(item)}
              fieldValue='technologyFieldId'
              fieldName='name'
            />
          </div>
          <div className='flex size-full flex-col items-center justify-start   p-4 '>
            <FilterTag
              title='کاربرد تجهیزات'
              selectedItems={usageServiceItem}
              onSelectItem={(item: any) => onSelectUsageServiceItem(item)}
              items={usageService?.data}
              fieldValue='usageId'
              fieldName='name'
            />
          </div>
          <Button
            className='!my-4 !mt-8 !min-w-[120px] !text-white'
            onClick={() => onSearch()}
            variant='contained'
          >
            جستجو
          </Button>
        </div>

        <div className=' mx-auto w-full  p-4  md:w-[80%]'>
          <div className='flex w-full flex-wrap'>
            {technicalAssistantData?.data?.map((item: any) => {
              return (
                <div
                  key={item?.equipmentId}
                  className='mx-4  my-3 flex w-full  flex-col items-start justify-start bg-white p-2 drop-shadow-lg sm:w-[40%] md:w-[15%] '
                >
                  <Link
                    className='flex size-full flex-col justify-between'
                    href={`/machines/${item?.equipmentId}/${item?.serviceId}`}
                  >
                    <Image
                      src={item?.equipmentImage}
                      alt=''
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <div className='flex flex-col px-2 py-3'>
                      <div className='text-sm font-bold'>
                        {item?.equipmentTitle}
                      </div>
                      <div className='pt-2 text-xs font-light'>
                        {item?.equipmentTitle}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center'>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePagination}
        />
      </div>
    </main>
  );
}
