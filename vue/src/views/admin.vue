<template>
  <div class="grid grid-cols-[1fr_auto] gap-8">
    <div class="card shadow-xl bg-base-100 max-w-[18rem] m-auto">
      <div class="card-body">
        <h2 class="card-title text-secondary">K cemu tu je admin?</h2>
        <p>
          Tento login slouzi pro pristup do admin rozhrani, kde je mozne pridavat, editovat a mazat prispevky.
        </p>
      </div>
    </div>
    <div class="card shadow-xl bg-base-200 min-w-fit">
      <div class="card-body items-center">
          <h2 class="card-title text-primary">Login to admin:</h2>
          <form class="space-y-4">
            <div>
                <label class="label">
                    <span class="text-base label-text">User</span>
                </label>
                <input type="text" placeholder="User Name" class="w-full input input-bordered" />
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Password"
                    class="w-full input input-bordered" />
            </div>
            <a href="#" class="text-xs link hover:link-accent justify-start">Forget Password?</a>
            <div class="card-actions justify-end">
                <button class="btn btn-secondary">Login</button>
            </div>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Admin page',
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
