import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalProduto.css';
import FormProduto from '../formproduto/FormProduto';

function ModalProduto() {
  return (
    <Popup
      trigger={
        <button className="border rounded px-4 py-2 bg-[#434522] text-white hover:bg-white hover:text-[#434522] transition">
          Novo Produto
        </button>
      }
      modal
    >
      <FormProduto />
    </Popup>
  );
}

export default ModalProduto;
