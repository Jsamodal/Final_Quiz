class Api::ApplicationController < ApplicationController
    rescue_from ActiveRecord:: RecordInvalid, with: :record_invalid
  
  private
  def record_invalid(error)
  
    invalid_record = error.record
  
  
  
    errors = invalid_record.errors.map do |field, message|
      {
        type: error.class.to_s,
        record_type: invalid_record.class.to_s,
        field:field,
        message: message
  
      }
    end
    render(
      json: {status: 422, errors:errors},
      status: 422
    )
  
  end
  
end
  