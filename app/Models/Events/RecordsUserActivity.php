<?php

namespace App\Models\Events;

use App\Models\Users\UserActivity;

trait RecordsUserActivity {

	protected static function bootRecordsUserInterface()
	{

		foreach (static::getModelEvents() as $event){
			static::$event(function ($model) use ($event){
				$model->recordObject($event);
			});

		}
	}

	/**
	 * Place objects in the database
	 *
	 * @param $event
	 */
	public function recordObject($event)
	{
		UserActivity::create([
			'object_id' => $this->id,
			'object_type' => get_class($this),
			'name' => $this->getObjectNameAction($this, $event),
			//changing to taggable
			'user_id' => 1// $this->owner_id
		]);

	}

	protected function getObjectNameAction($model, $action)
	{
		$name = strtolower((new \ReflectionClass($model))->getShortName());
		return "{$action}_{$name}";
	}

	protected static function getModelEvents()
	{
		if(isset(static::$recordEvents)){
			return static::$recordEvents;
		}

		return ['created', 'deleted', 'updated'];
	}

}