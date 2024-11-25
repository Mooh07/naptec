if (!customElements.get('product-meta-tabs')) {
  customElements.define(
    'product-meta-tabs',
    class ProductMeta extends HTMLElement {
      constructor () {
        super();
        this.tabButtons = Array.from(this.querySelector('.product__meta-buttons-container').children);
        this.tabsContent = Array.from(this.querySelector('.product__meta-tabs-container').children);
        this.tabs = this.tabButtons.map((button, buttonIndex) => [button, this.tabsContent[buttonIndex]]);
        this.inner = this.dataset['isinner'];
        this.activeTab = this.tabs[0];
        this.tabs.forEach((tab, tabIndex)=> {
          tab[0].addEventListener('click', (event)=> {
            this.activeTab[0].classList.remove('selected-button');
            this.activeTab[1].classList.remove('selected-tab');
            this.activeTab = this.tabs[tabIndex];
            this.activeTab[0].classList.add('selected-button');
            this.activeTab[1].classList.add('selected-tab');
          })
        })
      }
    }
  )
}