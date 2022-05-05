import React from 'react'

import Item from './Item';
import Form from './Form';
import ItemEdit from './ItemEdit';

function Content({store}) {
  return (
    <div className="app__content">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Wellcome!</h5>
                <p className="card-text">To get started, add some items to your list:</p>
                <div className="d-inline-block">
                  <div>
                    <Form/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {store.items.length ? 
          <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="content__todos">
              <ul className="list-group content__todos__ul">
                {store.items.map((item)=>(
                  <div className="content__todos__li" key={item.id}>
                    {store.editingItem.id === item.id ? (
                      <ItemEdit
                        item={item}
                      />
                    ) : (
                      <Item 
                        item = {item}
                      />
                    )}
                  </div>
                  )
                )
                }
              </ul>
            </div>
          </div>
        </div>
        : null
        }
      </div>
    </div>
  )
}

export default Content