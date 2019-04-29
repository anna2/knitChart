class CreatePatterns < ActiveRecord::Migration[5.2]
  def change
    create_table :patterns do |t|
      t.string :name
      t.text :stitches
      t.integer :width
      t.integer :height

      t.timestamps
    end
  end
end
