import dynamic from 'next/dynamic';

const DynamicInsertMaptiler = dynamic(() => import('./DynamicInsertMaptiler'), {
  ssr: false
});

const InsertMaptiler = () => {
  return (
      <DynamicInsertMaptiler />
  )
}

export default InsertMaptiler;