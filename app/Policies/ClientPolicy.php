<?php

namespace App\Policies;

use App\Models\Client;
use App\Models\UserM;
use Illuminate\Auth\Access\HandlesAuthorization;

class ClientPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\UserM  $userM
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(UserM $userM)
    {
        if ($userM->role->level <= 6) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(UserM $userM, Client $client)
    {
        if ($userM->role->level <= 6) {
            return true;
        } else if ($userM->id == $client->user_id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\UserM  $userM
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(UserM $userM)
    {
        if ($userM->role->level <= 3) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(UserM $userM, Client $client)
    {
        if ($userM->role->level <= 2) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(UserM $userM, Client $client)
    {
        if ($userM->role->level <= 2) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(UserM $userM, Client $client)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(UserM $userM, Client $client)
    {
        //
    }

    public function allowClient(UserM $userM) {
        if ($userM->role->level <= 2) {
            return true;
        }

        return false;
    }

    public function interaction(UserM $userM, Client $client)
    {
        if ($userM->role->level <= 2) {
            return true;
        } else if ($userM->id == $client->user_id) {
            return true;
        }

        return false;
    }
}
