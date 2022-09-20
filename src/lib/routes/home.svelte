<script>
    import { DescriptionList } from '../components';
    import { FirebaseHelper } from '../classes';
    import { Timestamp } from "firebase/firestore";

    const fb = new FirebaseHelper();
    let posts = fb.posts;
    let formSubmitted = false;

    // Add post to firebase
    function handleSubmit(form) {
        const formData = new FormData(form.target);
        const post = {};
        for (let field of formData) {
            const [key, value] = field;
            post[key] = value;
        }
        post.date = Timestamp.now();
        fb.addPost(post);
        formSubmitted = true;
    }
    
    // Close form modal
    function closeMessage(){
        formSubmitted = false;
    }
</script>

<h1 class="uk-heading-line uk-text-center"><span>Welcome to my Blog</span></h1>
<h5 class="uk-text-center uk-margin-remove-top">Lorem ipsum about blog site</h5>
<h6 class="uk-text-center uk-margin-remove-top"><button class="uk-button uk-button-text" uk-toggle="target: #add-post">Add Post</button></h6>

<div id="add-post" uk-modal="">
    <div class="uk-modal-dialog uk-modal-body">
        {#if formSubmitted}
            <div class="uk-notification" style="display: block">
                <div class="uk-notification-message uk-notification-message-success" role="alert" style="opacity: 1; margin-top: 0px;"> 
                    <a href="#" on:click={closeMessage} class="uk-notification-close uk-icon uk-close uk-modal-close" data-uk-close=""><svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></a> 
                    <div>Successfully added!</div> 
                </div>
            </div>
        {/if}
        <h2 class="uk-modal-title">Add Post</h2>
        <form class="uk-form-stacked" on:submit|preventDefault={handleSubmit}>
            <div class="uk-margin">
                <label class="uk-form-label" for="title">Title</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="title" name="title" type="text" placeholder="Some text...">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="description">Description</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="description" name="description" type="text" placeholder="Some text...">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="content">Content with HTML</label>
                <div class="uk-form-controls">
                    <textarea class="uk-textarea" rows="5" id="content" name="content" placeholder="Textarea"></textarea>
                </div>
            </div>
            <p class="uk-text-right">
                <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                <button class="uk-button uk-button-primary" type="submit">Save</button>
            </p>        
        </form>
    </div>
</div>

<section class="uk-container">
    <dl class="uk-description-list uk-description-list-divider uk-list">
        <DescriptionList 
            items={Object.values($posts)}
        />
    </dl>
</section>
