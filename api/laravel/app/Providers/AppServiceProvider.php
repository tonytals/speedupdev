<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

// Services
use App\Services\UsuarioService;
use App\Services\UsuarioServiceInterface;

//Repositories
use App\Repositories\UsuarioRepository;
use App\Repositories\UsuarioRepositoryInterface;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Services
        $this->app->bind(UsuarioServiceInterface::class, UsuarioService::class);

        // Repositories
        $this->app->bind(UsuarioRepositoryInterface::class, UsuarioRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
