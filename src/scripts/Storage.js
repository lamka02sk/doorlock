export default {

  dbVersion: 1,
  connection: null,
  indexedDB: null,

  checkSupport() {

    // Check for IndexedDB support
    this.fullBrowserSupport = !!window.indexedDB;
    this.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    this.browserSupport = !!window.indexedDB;

    if(!this.browserSupport)
      return {
        title: 'Unsupported browser!',
        close: false,
        content: 'You are using unsupported browser. In order to use doorlock, you will need to update your browser.'
      };
    else if(this.browserSupport && !this.fullBrowserSupport)
      return {
        title: 'Your browser is deprecated!',
        close: true,
        content: 'Even though your current browser should support doorlock, you may experience errors. We really ' +
          'suggest you to update your web browser.'
      };

    return null;

  },

  async prepare() {

    this.connection = await this.indexedDB.open('doorlockStorage', this.dbVersion);
    this.connection.onerror = () => {};
    this.connection.onsuccess = result => result;
    this.connection.onupgradeneeded = () => {};

  }

}
