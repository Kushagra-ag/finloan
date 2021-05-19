import Plus from './icons/plus-circle.svg';
import Search from './icons/search.svg';
import Edit from './icons/edit.svg';
import './index.css';

export default function ManageCodes() {

  return(
    <div id="managecodes" className="pl-5 mb-5">
      <div className="py-3 d-flex align-items-center">
        <h5 className="flex-grow-1">Manage Codes</h5>
        <div className="blue-btn" data-toggle="modal" data-target="#addCodeModal">
          <img src={Plus} className="mr-2" alt="" />
          Add Codes
        </div>
      </div>

      <div className="row my-5 w-100">
        <div className="col-12 d-flex justify-content-center search-box">
          
          <form className="align-items-center py-sm-4 flex-grow-1 w-100">
            <div className="input-group bg-transparent">
              <div className="input-group-prepend bg-transparent">  
                <span className="searchIcon input-group-text bg-white pl-3">
                  <img src={Search} alt="" />
                </span>
              </div>
            
              <input placeholder="Search by name" id="inlineFormInputGroup" className="search-input form-control border-0" />
            </div>
          </form>
        </div>
      </div>
      <div className="row w-100">
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>ADDRESS_TYPE</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>Asset account tags</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>CenterClosureReason</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
            
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>ClientClassification</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
            
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>Client closure reason</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
            
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>ClientRejectReason</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
            
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>ClientSubStatus</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
            
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>ClientType</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
            
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>Customer identifier</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
            
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>Entity to Entity Access Types</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
            
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>Equity account tags</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
            
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-between">
            <div>
              <h6 className="code-name">
                Code name
              </h6>
              <h6>Expense account tags</h6>
              <span className="system-text pr-2">System Defined</span>
              <span className="text-blue pl-2">True</span>
            </div>
            <div className="align-self-start">
              <img src={Edit} className="cursor-pointer" alt=""/>
            </div>
            
          </div>
        </div>
      </div>
      {/*<!-- Modal -->*/}
      <div className="modal fade" id="addCodeModal" tabIndex="-1" role="dialog" aria-labelledby="addCode" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="addCodeModal">Add code</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <label className="form-label" for="addCode">Code Name</label>
              <input type="text" id="addCode" className="form-control" />
            </div>
            <div className="modal-footer border-top-0">
              <button type="button" className="green-btn w-100" data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}