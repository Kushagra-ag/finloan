import Plus from './icons/plus-circle.svg';
import ArrowDown from './icons/chevron-down.svg';
import './index.css';

export default function EditCode() {

	return (
		<div id="editcode" className="pl-5 mb-5">
			<div className="py-3 d-flex align-items-center">
				<h5 className="flex-grow-1">ADDRESS_TYPE</h5>
				<div className="blue-btn">
					<img src={Plus} className="mr-2" alt="" />
					Add Code Values
				</div>
			</div>

			<div className="row my-5 w-100">
				<div className="col-12 d-flex justify-content-center">


					<table className="table table-borderless table-hover table-responsive-sm bg-white overflow-hidden">
					  <thead>
					    <tr className="py-4">
					      <th scope="col" className="pl-4">Name<span><img src={ArrowDown} alt="" /></span></th>
					      <th scope="col">Description</th>
					      <th scope="col">Position<span><img src={ArrowDown} alt="" /></span></th>
					      <th scope="col">Status<span><img src={ArrowDown} alt="" /></span></th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td className="name-col">CodeValueName</td>
					      <td className="desc-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</td>
					      <td className="pos-col">Position details</td>
					      <td className="status-col">
					      	<div className="active text-center d-inline-block">
					      		Active
					      	</div>
					      </td>
					    </tr>
					    <tr>
					      <td className="name-col">CodeValueName</td>
					      <td className="desc-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</td>
					      <td className="pos-col">Position details</td>
					      <td className="status-col">
					      	<div className="active text-center d-inline-block">
					      		Active
					      	</div>
					      </td>
					    </tr>
					    <tr>
					      <td className="name-col">CodeValueName</td>
					      <td className="desc-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</td>
					      <td className="pos-col">Position details</td>
					      <td className="status-col">
					      	<div className="inactive text-center d-inline-block">
					      		Inactive
					      	</div>
					      </td>
					    </tr>
					    <tr>
					      <td className="name-col">CodeValueName</td>
					      <td className="desc-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</td>
					      <td className="pos-col">Position details</td>
					      <td className="status-col">
					      	<div className="active text-center d-inline-block">
					      		Active
					      	</div>
					      </td>
					    </tr>
					    <tr>
					      <td className="name-col">CodeValueName</td>
					      <td className="desc-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</td>
					      <td className="pos-col">Position details</td>
					      <td className="status-col">
					      	<div className="active text-center d-inline-block">
					      		Active
					      	</div>
					      </td>
					    </tr>
					    <tr>
					      <td className="name-col">CodeValueName</td>
					      <td className="desc-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</td>
					      <td className="pos-col">Position details</td>
					      <td className="status-col">
					      	<div className="active text-center d-inline-block">
					      		Active
					      	</div>
					      </td>
					    </tr>
					  </tbody>
					</table>

				</div>
			</div>

		</div>
	)
}