<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'companyName',
        'street',
        'city',
        'state',
        'zip',
        'phone',
        'email',
        'website',
        'details',
        'shows',
        'standerdBooth',
        'cornerBooth',
        'elecrical',
        'prePay',
        'multiShow',
        'multiBooth',
        'fullTotal',
        'fullDiscount',
        'calculatedTotal',
    ];
}
