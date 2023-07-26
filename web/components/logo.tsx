'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

interface logoProps {
  size?: number;
}

export const Logo: FC<logoProps> = ({ size = 100 }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className=''>
      <Image
        src={'/space-repeat-logo.svg'}
        alt='logo'
        width={size}
        height={size}
        className={` cursor-pointer `}
      />
    </motion.div>
  );
};
