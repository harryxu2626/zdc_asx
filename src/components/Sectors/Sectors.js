import dynamic from 'next/dynamic';

const DynamicSectors = dynamic(() => import('./DynamicSectors'), {
  ssr: false
});



const Sectors = (props) => {
  return (
    <DynamicSectors {...props} />

  )
}

export default Sectors;