import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import Swal from 'sweetalert2';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) =>
      Swal.fire({
        text: alert.msg,
        icon: alert.type,
        confirmButtonText: 'OK',
      })
    )
  );
};

export default Alerts;
