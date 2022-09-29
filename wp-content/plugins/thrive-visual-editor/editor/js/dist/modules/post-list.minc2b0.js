void 0===TCB_Front.js_modules["post-list"]&&TCB_Front.setModuleLoadedStatus("post-list",!1),(t=>{if(!TCB_Front.isModuleLoaded("post-list")){t(window).on("tcb_after_dom_ready",(()=>{t(".tcb-post-list").each(((i,s)=>{new e(t(s)).renderPagination()}))}));class e{constructor(e){this.$element=e,this.content="",this.listArgs={};let i=this.getAttr("data-css");const s=t.Event("tcb_post_list_identifier.tcb");this.$element.trigger(s),s.identifier&&(i=s.identifier),this.identifier=i,this.listIdentifier="article",tve_frontend_options.is_editor_page?this.editorInit():this.frontendInit()}getPaginationInstance(){if(this.listArgs&&this.listArgs.attr){const t=this.listArgs.attr["pagination-type"];if(t.length&&"none"!==t&&void 0!==TCB_Front.Pagination)return TCB_Front.Pagination.factory(t,this)}}renderPagination(){this.pagination=this.getPaginationInstance(),this.pagination&&(tve_frontend_options.is_editor_page||this.pagination.addLoadListeners(),this.pagination.render())}editorInit(){this.listArgs={attr:{"pagination-type":this.getAttr("data-pagination-type"),total_post_count:this.getAttr("data-total_post_count")?this.getAttr("data-total_post_count"):100,pages_near_current:this.getAttr("data-pages_near_current")?this.getAttr("data-pages_near_current"):2},query:{posts_per_page:this.getAttr("data-posts_per_page")?this.getAttr("data-posts_per_page"):6,paged:1}}}frontendInit(){"undefined"==typeof tcb_post_lists?console.warn("Error initializing the post list parameters"):(this.listArgs=tcb_post_lists.find((t=>this.$element.is(t.identifier))),this.listArgs&&(this.listArgs.query&&void 0!==this.listArgs.query.offset&&delete this.listArgs.query.offset,this.listArgs.attr.queried_object=0,this.listArgs.query.queried_object=tve_frontend_options.queried_object,this.content=t('.tcb-post-list-template[data-identifier="'+this.listArgs.template+'"]').html()))}getAttr(t){return this.$element.attr(t)}getItems(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.listArgs;t.ajax({url:tve_frontend_options.routes.posts+"/html",method:"POST",headers:{"X-WP-Nonce":tve_frontend_options.nonce},data:{content:this.content,args:i},success:t=>{"function"==typeof e&&e(t),this.initItems(),TCB_Front.event_triggers(this.$element)},error:()=>{console.warn("There was an error and the content could not be loaded.")}})}insertItems(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.count&&e.posts){const s=this.$element.clone().empty();for(const t in e.posts)e.posts.hasOwnProperty(t)&&s.append(e.posts[t]);i?(this.$element.replaceWith(s),this.identifier.includes("tve-u-")?this.$element=t(`.tcb-post-list[data-css=${this.identifier}]`):this.$element=t(this.identifier),t(window).trigger("tcb_post_list_after_item_insert")):(this.$element.append(s.html()),this.masonryRedo()),e.total_post_count&&(this.listArgs.attr.total_post_count=e.total_post_count)}}isLoading(){return this.$element.data("loading")}enableLoading(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$element.addClass("tve-loading"+(t.length?" "+t:"")),this.$element.data("loading",!0)}disableLoading(){setTimeout((()=>this.$element.removeClass("tve-loading load-bot")),100),this.$element.data("loading",!1)}masonryRedo(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$element;if(t.length&&t.data("masonry")){const e=t.find(`${this.listIdentifier}:not(.masonry-brick)`);t.masonry("appended",e),t.masonry("layout")}}initItems(){(this.$element.find(".tcb-custom-field-source.thrv-rating").length||this.$element.find("[data-shortcode-id*='acf_']").length)&&TCB_Front.dynamicElements.init()}}window.TCB_Front.PostList=e,TCB_Front.setModuleLoadedStatus("post-list",!0)}})(ThriveGlobal.$j);