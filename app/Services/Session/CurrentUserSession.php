<?php 

namespace App\Services\Session;

use App\Repositories\Repo;
use Illuminate\Support\Facades\Session;
use App\Contracts\UpdateCurrentUserSession;

/**
 * Class UpdatedUserSession
 * Loads and removes current user from Session info.
 *
 * @package App\Services
 */
class CurrentUserSession implements UpdateCurrentUserSession
{
    /**
     * Find current user object
     *
     * @return mixed
     */
    public function getCurrentUser()
    {
        $currentUser = Session::get('currentUser');
        \JavaScript::put(['editMode' => 1, 'currentUser' => $currentUser ]);
        return $currentUser;
    }

    /**
     * Save current User object to session
     *
     * @param $user_id
     */
    public static function saveCurrentUser($user_id)
    {
        $repo = new Repo;
        $currentUser = $repo->find('currentUser', $user_id);
        Session::put('currentUser', $currentUser);
    }

    /**
     * Truncate the current user session database
     */
    public static function removeCurrentUser()
    {
        Session::forget('currentUser');
    }
}
