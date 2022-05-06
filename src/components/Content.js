import React from 'react'
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import  ReorderItem  from '../redux/actions/reorderItems'


import Item from './Item';
import Form from './Form';
import ItemEdit from './ItemEdit';

function Content({store}) {
  const dispatch = useDispatch();

  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    dispatch(ReorderItem(result.source.index, result.destination.index));
  };

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
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="ul">
                    {provided => (
                      <div ref={provided.innerRef}>
                      {console.log(store.items)}
                        {store.items.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {provided => (
                              
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="content__todos__li">
                                {console.log(provided)}
                                {store.editingItem.id === item.id ? (
                                  <ItemEdit item={item} />
                                ) : (
                                  <Item item={item} />
                                )}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
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