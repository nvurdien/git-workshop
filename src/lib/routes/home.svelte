<script>
    import { Link } from "svelte-routing";
    import { DescriptionList } from '../components';
</script>

<h1 class="uk-heading-line uk-text-center"><span>Welcome to my Blog</span></h1>
<h5 class="uk-text-center uk-margin-remove-top">Lorem ipsum about blog site</h5>

<section class="uk-container">
    <article class="uk-article">

        <h1 class="uk-article-title"><Link class="uk-link-reset" to="post">Heading</Link></h1>
    
        <p class="uk-article-meta">Written on 12 April 2012.</p>
    
        <p class="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
    
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
        <div class="uk-grid-small uk-child-width-auto" uk-grid="">
            <div>
                <Link class="uk-button uk-button-text" to="post">Read more</Link>
            </div>
        </div>
    
    </article>
    <dl class="uk-description-list uk-description-list-divider uk-list">
        <DescriptionList 
            items={[{
                id: 123, 
                title: "Description term",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            }, {
                id: 12, 
                title: "Description term",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }, {
                id: 13, 
                title: "Description term",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }]}
        />
    </dl>
</section>