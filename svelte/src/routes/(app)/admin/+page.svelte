<div class="grid md:grid-cols-[1fr_auto] gap-8 h-full items-center">
    <!-- info card -->
    <div class="card shadow-xl bg-base-100 max-w-[18rem] m-auto">
    <div class="card-body">
        <h2 class="card-title text-secondary">K čemu tu je admin?</h2>
        <p>
        Tento login slouží pro přístup do admin rozhrani, kde je možné přidávat, editovat a mazat příspěvky.
        </p>
    </div>
    </div>
    <!-- login form -->
    <div class="card shadow-xl bg-base-100 min-w-fit">
    <div class="card-body items-center">
        <h2 class="card-title text-primary">Login to admin:</h2>
        <form id="login" class="space-y-4">
            <div>
                <label for="login" class="label">
                    <span class="text-base label-text">User</span>
                </label>
                <input type="text" placeholder="User Name" class="w-full input input-bordered" />
            </div>
            <div>
                <label for="login" class="label">
                    <span class="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Password"
                    class="w-full input input-bordered" />
            </div>
            <a href=" " class="text-xs link hover:link-accent justify-start">Forgot Password?</a>
            <div class="card-actions justify-end">
                <button class="btn btn-secondary">Login</button>
            </div>
        </form>
    </div>
    </div>
    
</div>
  