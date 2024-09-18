import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Deepal Singh</h1>
      <p>
        Check out my GitHub repository: 
        <Link href="https://github.com/deepalsingh/cprg306-assignments">
          GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;