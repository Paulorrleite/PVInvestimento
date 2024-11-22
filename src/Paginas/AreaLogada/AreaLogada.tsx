
import PagedList from '../../Componentes/PagedList/PagedList';
import Sidebar from '../../Componentes/SideBar/SideBar';
const AreaLogada = () => {
    return(
        <>
            <div className='background'>
                <Sidebar/>
                <PagedList/>
            </div>
        </>        
    );
}
export default AreaLogada