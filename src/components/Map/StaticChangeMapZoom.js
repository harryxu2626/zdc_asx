import dynamic from 'next/dynamic';

const DynamicCMZ = dynamic(() => import('./ChangeMapZoom'), {
  ssr: false
});



const ChangeMapZoom = (props) => {
  return (
    <DynamicCMZ {...props} />

  )
}

export default ChangeMapZoom;