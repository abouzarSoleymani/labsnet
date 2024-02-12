import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='surface-ground align-items-center justify-content-center min-w-screen flex min-h-screen overflow-hidden'>
      <div className='flex-column align-items-center justify-content-center flex'>
        <div
          style={{
            borderRadius: '56px',
            padding: '0.3rem',
            background:
              'linear-gradient(180deg, rgba(33, 150, 243, 0.4) 10%, rgba(33, 150, 243, 0) 30%)',
          }}
        >
          <div
            className='surface-card flex-column align-items-center flex w-full px-5 py-8 sm:px-8'
            style={{ borderRadius: '53px' }}
          >
            <span className='text-3xl font-bold text-blue-500'>404</span>
            <h1 className='text-900 mb-2 text-5xl font-bold'>Not Found</h1>
            <div className='text-600 mb-5'>
              Requested resource is not available
            </div>
            <Link
              href='/'
              className='align-items-center border-300 border-bottom-1 flex w-full py-5'
            >
              <span
                className='justify-content-center align-items-center border-round flex bg-cyan-400'
                style={{ height: '3.5rem', width: '3.5rem' }}
              >
                <i className='text-50 pi pi-fw pi-table text-2xl'></i>
              </span>
              <span className='flex-column ml-4 flex'>
                <span className='text-900 mb-1 font-medium lg:text-xl'>
                  Frequently Asked Questions
                </span>
                <span className='text-600 lg:text-lg'>
                  Ultricies mi quis hendrerit dolor.
                </span>
              </span>
            </Link>
            <Link
              href='/'
              className='align-items-center border-300 border-bottom-1 flex w-full py-5'
            >
              <span
                className='justify-content-center align-items-center border-round flex bg-orange-400'
                style={{ height: '3.5rem', width: '3.5rem' }}
              >
                <i className='pi pi-fw pi-question-circle text-50 text-2xl'></i>
              </span>
              <span className='flex-column ml-4 flex'>
                <span className='text-900 mb-1 font-medium lg:text-xl'>
                  Solution Center
                </span>
                <span className='text-600 lg:text-lg'>
                  Phasellus faucibus scelerisque eleifend.
                </span>
              </span>
            </Link>
            <Link
              href='/'
              className='align-items-center border-300 border-bottom-1 mb-5 flex w-full py-5'
            >
              <span
                className='justify-content-center align-items-center border-round flex bg-indigo-400'
                style={{ height: '3.5rem', width: '3.5rem' }}
              >
                <i className='pi pi-fw pi-unlock text-50 text-2xl'></i>
              </span>
              <span className='flex-column ml-4 flex'>
                <span className='text-900 mb-1 font-medium lg:text-xl'>
                  Permission Manager
                </span>
                <span className='text-600 lg:text-lg'>
                  Accumsan in nisl nisi scelerisque
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
