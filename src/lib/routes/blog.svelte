<script>
    import { Link } from "svelte-routing";
    import { FirebaseHelper } from '../classes';

    // route params id to get document from firebase
    export let id;

    // instantiate firebase helper to get posts
    const fb = new FirebaseHelper();
    let posts = fb.posts;
</script>

<!--Use if to wait for posts to load-->
<!--Use $ notation for writeable variables to change page based on state-->
{#if Object.keys($posts).length > 0}
<section class="uk-container">
    <Link to="/"><span uk-icon="icon: arrow-left"></span> Back</Link>
    <section class="uk-container">
        <article class="uk-article">

            <h1 class="uk-article-title"><Link class="uk-link-reset" to="post">{$posts[id].title}</Link></h1>

            <p class="uk-article-meta">Written on {$posts[id].date.toDate().toDateString()}</p>

            <p class="uk-text-lead">{$posts[id].description}</p>

            <p>{@html $posts[id].content}</p>

        </article>
    </section>
</section>
{/if}