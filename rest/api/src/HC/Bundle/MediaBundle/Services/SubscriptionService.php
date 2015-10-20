<?php
namespace HC\Bundle\MediaBundle\Services;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class SubscriptionService
{
	public function add(){

		$request = Request::createFromGlobals();
		$input = $request->request->get('input');


		// Return error if input is empty
		if(!isset($input)){
			$response = new Response(json_encode(array('status' => false)));
			$response->headers->set('Content-Type', 'application/json');
			return $response;
		}
		// Check to see if the value is url (XML feed) or Youtube channel ID
		// If the input is a URL
		if(filter_var($input, FILTER_VALIDATE_URL)){
			
		}

	}

}