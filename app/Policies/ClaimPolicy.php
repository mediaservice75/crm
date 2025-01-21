<?php

namespace App\Policies;

use App\Models\Claim;
use App\Models\Client;
use App\Models\UserM;
use Illuminate\Auth\Access\HandlesAuthorization;

class ClaimPolicy
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
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\Claim  $claim
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(UserM $userM, Claim $claim)
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\UserM  $userM
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(UserM $userM)
    {
        if ($userM->role->level <= 2) {
            return true;
        }
        return false;
    }



    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\Claim  $claim
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(UserM $userM, Claim $claim)
    {
        if ($userM->role->level <= 2) {
            return true;
        } else if ($userM->id == $claim->creator) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\Claim  $claim
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(UserM $userM, Claim $claim)
    {
        if ($userM->role->level <= 2) {
            return true;
        } else if ($userM->id == $claim->creator) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\Claim  $claim
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(UserM $userM, Claim $claim)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\Claim  $claim
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(UserM $userM, Claim $claim)
    {
        //
    }

    public function check(UserM $userM, Client $client)
    {
        return true;
        if ($userM->role->level <= 2) {
            return true;
        } else if ($userM->id == $client->user_id) {
            return true;
        }
        return false;
    }
}
