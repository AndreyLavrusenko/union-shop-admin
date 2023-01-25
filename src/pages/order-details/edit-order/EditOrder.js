import React from 'react';

const EditOrder = ({orderDetails, changeOrderStatus}) => {

    const allStatuses = [
        ['performed', 'Оплачено'],
        ['sent', 'Отправлено'],
        ['delivered', 'Доствлено'],
        ['received', 'Получено']
    ]


    return (
        <div className="edit__order">
            {allStatuses.map((allStatus, i) => {
                if (orderDetails[0].status === allStatus[0]) {
                    return (
                        <button className="edit__order-active" key={i} value={allStatus[0]}>
                            {allStatus[1]}
                        </button>
                    )
                } else {
                    return (
                        <button onClick={() => changeOrderStatus(orderDetails[0].id, allStatus[0])} key={i} value={allStatus[0]}>
                            {allStatus[1]}
                        </button>
                    )
                }
            })}
        </div>
    );
};

export default EditOrder;