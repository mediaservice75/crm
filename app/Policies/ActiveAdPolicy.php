<?php

namespace App\Policies;

use App\Models\ActiveAd;
use App\Models\UserM;
use Illuminate\Auth\Access\HandlesAuthorization;

class ActiveAdPolicy
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
        if ($userM->role->level == 1 || $userM->role->level == 2) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\ActiveAd  $activeAd
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(UserM $userM, ActiveAd $activeAd)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\UserM  $userM
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(UserM $userM)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\ActiveAd  $activeAd
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(UserM $userM, ActiveAd $activeAd)
    {
        if ($userM->role->level == 1 || $userM->role->level == 2) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\ActiveAd  $activeAd
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(UserM $userM, ActiveAd $activeAd)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\ActiveAd  $activeAd
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(UserM $userM, ActiveAd $activeAd)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\UserM  $userM
     * @param  \App\Models\ActiveAd  $activeAd
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(UserM $userM, ActiveAd $activeAd)
    {
        //
    }
}
