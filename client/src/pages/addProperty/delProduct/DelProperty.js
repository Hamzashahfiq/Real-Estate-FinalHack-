import { useSelector } from "react-redux";
import CommonCard from '../../../commonComponents/commonCard/CommonCard'


export default function DelProperty() {
    const propertys = useSelector((store) => store.ProductSlice.propertys)
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'Wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px'}}>
            {propertys.map((item) => {
                return (
                    <CommonCard pData={item} delType = 'del' />
                )
            })}

        </ div>
            )


}

