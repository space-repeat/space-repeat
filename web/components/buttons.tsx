'use client';

import { motion } from 'framer-motion';

export const GithubStar = () => {
  return (
    <motion.a
      href='https://github.com/space-repeat/space-repeat'
      target='_blank'
      whileHover={{ scale: 1.05 }}
      className='bg-zinc-700 p-2 rounded-lg shadow-lg '
    >
      🌟 Star us on Github
    </motion.a>
  );
};
