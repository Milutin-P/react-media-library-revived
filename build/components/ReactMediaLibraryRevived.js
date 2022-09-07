import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactMediaLibraryTabs from './ReactMediaLibraryTabs';
const ReactMediaLibraryRevived = (props) => {
    const { show, onHide, modalTitle, fileLibraryList, fileUploadCallback, fileSelectCallback, fileDeleteCallback, libraryCardComponent, sortProperty, itemsPerPage, } = props;
    return (React.createElement(Modal, { size: "xl", show: show, onHide: onHide, id: "react-media-library-modal", "aria-labelledby": "react-media-library-modal" },
        React.createElement(Modal.Header, { closeButton: true }, modalTitle && React.createElement(Modal.Title, null, modalTitle)),
        React.createElement(Modal.Body, null,
            React.createElement(ReactMediaLibraryTabs, { fileLibraryList: fileLibraryList, fileUploadCallback: fileUploadCallback, fileSelectCallback: fileSelectCallback, fileDeleteCallback: fileDeleteCallback, libraryCardComponent: libraryCardComponent, sortProperty: sortProperty, itemsPerPage: itemsPerPage }))));
};
ReactMediaLibraryRevived.defaultProps = {
    modalTitle: 'Media Library',
};
export default ReactMediaLibraryRevived;
//# sourceMappingURL=ReactMediaLibraryRevived.js.map