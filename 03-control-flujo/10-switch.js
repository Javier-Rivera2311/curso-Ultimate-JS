let accion = 'actualizar';

switch (accion) {
    case 'listar':
        console.log('Acción de listar. ', accion);
        break;
    case 'guardar':
        console.log('Acción de guardar. ', accion);
        break;
    default:
        console.log('Acción no reconocida. ', accion);
        break;
}
